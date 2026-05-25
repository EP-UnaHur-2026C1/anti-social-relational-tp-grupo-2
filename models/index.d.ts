import { Sequelize } from 'sequelize';

export interface Database {
  User: any;
  Post: any;
  Comment: any;
  Tag: any;
  PostTag: any;
  PostImage: any;
  Follower: any;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}

export const User: any;
export const Post: any;
export const Comment: any;
export const Tag: any;
export const PostTag: any;
export const PostImage: any;
export const Follower: any;
export const sequelize: Sequelize;
export const Sequelize: typeof Sequelize;
