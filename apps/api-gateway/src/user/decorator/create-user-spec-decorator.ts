import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function CreateUserSpecDecorator(summary: string, description: string) {
  return applyDecorators(
    ApiOperation({ summary, description }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          email: { type: 'string', example: 'test@example.com' },
          password: { type: 'string', example: 'test1234' },
          nickname: { type: 'string', example: 'testuser' },
          marketingAgreed: {
            type: 'boolean',
            example: true,
            description: '마케팅 수신 동의 여부',
          },
          gender: {
            type: 'string',
            enum: ['male', 'female'],
            example: 'male',
            description: '성별',
          },
        },
        required: [
          'email',
          'password',
          'nickname',
          'marketingAgreed',
          'gender',
        ],
      },
    }),
    ApiResponse({
      status: 200,
      description: 'Success',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 100001 },
          email: { type: 'string', example: 'test@example.com' },
          nickname: { type: 'string', example: 'testuser' },
          image: { type: 'string', example: 'https://example.com/image.jpg' },
          gender: { type: 'string', example: 'male' },
          createdAt: { type: 'string', example: '2021-01-01T00:00:00Z' },
          updatedAt: { type: 'string', example: '2021-01-01T00:00:00Z' },
          deletedAt: { type: 'string', example: null },
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
