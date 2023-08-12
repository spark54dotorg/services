import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RegisteredUserDocument = HydratedDocument<RegisteredUser>;

@Schema()
export class RegisteredUser {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  state: string;
}

export const RegisteredUserScheme =
  SchemaFactory.createForClass(RegisteredUser);
