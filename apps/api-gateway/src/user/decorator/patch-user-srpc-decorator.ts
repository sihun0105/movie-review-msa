import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function UpdateUserSpecDecorator(summary: string, description: string) {
  return applyDecorators(
    ApiOperation({ summary, description }),
    ApiHeader({
      name: 'Authorization',
      description: 'Bearer access token',
      required: true,
      schema: {
        type: 'string',
        example: 'Bearer access token',
      },
    }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          password: { type: 'string', example: 'test' },
          nickname: { type: 'string', example: 'test' },
        },
      },
    }),
    ApiResponse({
      status: 200,
      description: 'Success',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          password: { type: 'string', example: 'test' },
          nickname: { type: 'string', example: 'test' },
          createdAt: { type: 'string', example: '2021-08-31T00:00:00.000Z' },
          updatedAt: { type: 'string', example: '2021-08-31T00:00:00.000Z' },
          deletedAt: { type: 'string', example: '2021-08-31T00:00:00.000Z' },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Bad Request',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          message: { type: 'string', example: 'Bad Request' },
          error: { type: 'string', example: 'Bad Request' },
        },
      },
    }),
    ApiResponse({
      status: 401,
      description: 'Unauthorized',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 401 },
          message: { type: 'string', example: 'Unauthorized' },
          error: { type: 'string', example: 'Unauthorized' },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal Server Error',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 500 },
          message: { type: 'string', example: 'Internal Server Error' },
          error: { type: 'string', example: 'Internal Server Error' },
        },
      },
    }),
  );
}
