import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// TODO: Improve this tables and add RLS

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  nickname: varchar({ length: 255 }).notNull(),
  favoritesSpots: varchar({ length: 255 }).notNull(), // Array of spot IDs
  country: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: varchar({ length: 255 }).notNull(),
  updatedAt: varchar({ length: 255 }).notNull(),
});

export const spotsTable = pgTable("spots", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  country: varchar({ length: 255 }).notNull(),
  city: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 255 }).notNull(),
  stars: integer().notNull(),
  createdAt: varchar({ length: 255 }).notNull(),
  updatedAt: varchar({ length: 255 }).notNull(),
  images: varchar({ length: 255 }).notNull(),
  size: varchar({ length: 255 }).notNull(),
});

export const commentsTable = pgTable("comments", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  spotId: integer().notNull(),
  content: varchar({ length: 255 }).notNull(),
  createdAt: varchar({ length: 255 }).notNull(),
  updatedAt: varchar({ length: 255 }).notNull(),
  likes: integer().notNull(),
});
