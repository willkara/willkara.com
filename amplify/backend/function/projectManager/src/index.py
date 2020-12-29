import boto3
from boto3.dynamodb.conditions import Key, Attr
import json

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('projectlist-prod')

def handler(event, context):
  print('received event:')
  print(event)
  try:
      response = table.get_item(Key={'ProjectID': 1})
      print(response)
      return {
          'statusCode': 200,
          'headers': {
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'OPTIONS,GET'
          },
          'body': json.dumps(response)
      }
  except ClientError as e:
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

