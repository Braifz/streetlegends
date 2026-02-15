CREATE TABLE "comments" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "comments_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer NOT NULL,
	"spotId" integer NOT NULL,
	"content" varchar(255) NOT NULL,
	"createdAt" varchar(255) NOT NULL,
	"updatedAt" varchar(255) NOT NULL,
	"likes" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spots" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "spots_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"stars" integer NOT NULL,
	"createdAt" varchar(255) NOT NULL,
	"updatedAt" varchar(255) NOT NULL,
	"images" varchar(255) NOT NULL,
	"size" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"nickname" varchar(255) NOT NULL,
	"favoritesSpots" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"createdAt" varchar(255) NOT NULL,
	"updatedAt" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
