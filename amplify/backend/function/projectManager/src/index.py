import boto3
from boto3.dynamodb.conditions import Key, Attr
import json
import botocore
import decimal


dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('projectlist-prod')

# Helper class to convert a DynamoDB item to JSON.
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return str(o)
        if isinstance(o, set):  #<---resolving sets as lists
            return list(o)
        return super(DecimalEncoder, self).default(o)

def handler(event, context):
  print('received event:')
  print(event)
  try:
      response = table.scan()
      return {
          'statusCode': 200,
          'headers': {
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'OPTIONS,GET'
          },
          'body': json.dumps(response['Items'], cls=DecimalEncoder)
      }
  except botocore.exceptions.ClientError as e:
      print(e.response['Error']['Message'])
      return {
          'statusCode': 200,
          'headers': {
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'OPTIONS,GET'
          },
          'body': json.dumps(e.response['Error'])
      }

