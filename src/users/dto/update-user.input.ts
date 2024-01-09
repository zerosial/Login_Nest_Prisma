import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true }) // GraphQL 데코레이터
  @ApiProperty({ description: 'Name of the user', required: false }) // Swagger 데코레이터
  username?: string;
}
