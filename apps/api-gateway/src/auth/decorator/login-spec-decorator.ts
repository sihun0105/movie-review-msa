import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function LoginSpecDecorator(summary: string, description: string) {
  return applyDecorators(
    ApiOperation({ summary, description }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            example: 'test@naver.com',
            description: '회원 이메일',
            title: '회원 이메일',
          },
          password: {
            type: 'string',
            example: 'test1234',
            description: '회원 비밀번호',
            title: '회원 비밀번호',
          },
        },
        required: ['email', 'password'],
      },
    }),
    ApiResponse({
      status: 200,
      description: 'Success',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 100001 },
          email: { type: 'string', example: 'test@naver.com' },
          nickname: { type: 'string', example: 'test' },
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
