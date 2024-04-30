--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6 (Debian 15.6-1.pgdg120+2)
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: role; Type: TYPE; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

CREATE TYPE public.role AS ENUM (
    'ADMIN',
    'USER'
);


ALTER TYPE public.role OWNER TO "postgres.darahqvsxaqohrrpotfh";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO "postgres.darahqvsxaqohrrpotfh";

--
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

CREATE TABLE public.carts (
    user_id uuid NOT NULL,
    product_id uuid NOT NULL,
    quantity integer
);


ALTER TABLE public.carts OWNER TO "postgres.darahqvsxaqohrrpotfh";

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

CREATE TABLE public.products (
    id uuid NOT NULL,
    name character varying(100),
    category character varying(100),
    description character varying(1000),
    price double precision,
    discounted_price double precision
);


ALTER TABLE public.products OWNER TO "postgres.darahqvsxaqohrrpotfh";

--
-- Name: products_images; Type: TABLE; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

CREATE TABLE public.products_images (
    id uuid NOT NULL,
    image character varying(100),
    product_id uuid
);


ALTER TABLE public.products_images OWNER TO "postgres.darahqvsxaqohrrpotfh";

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(100),
    email character varying(400),
    password character varying(100),
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated timestamp with time zone DEFAULT now() NOT NULL,
    role public.role NOT NULL
);


ALTER TABLE public.users OWNER TO "postgres.darahqvsxaqohrrpotfh";

--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

COPY public.alembic_version (version_num) FROM stdin;
f89000f9e8ee
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

COPY public.carts (user_id, product_id, quantity) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

COPY public.products (id, name, category, description, price, discounted_price) FROM stdin;
efa386dc-09c0-4d80-9435-df9476b52ce8	ALL-IN-ONE CAST IRON GRILL	grill-dine	Grill. Wok. Smoker. Skillet. Braiser. Roaster. Deep fryer. Slow cooker. Stock pot. The All-in-One Cast Iron Grill is an outdoor cook’s dream. A cast iron base and domed lid, grill grate, baking steel, tripod stand, and coal tray combine in countless configurations to expand your outdoor dining options. Done cooking? Pack it all down into a single self-contained bundle to minimize what you carry.	199	139.99
642f58f0-fe06-4ca8-8d06-80f0a13df015	HORI HORI ULTIMATE	tools	Originally designed to mimic the popular Japanese Garden Knife, hori hori roughly translates to “dig dig”. This hearty, multi-purpose tool is built for versatility. Pound in tent stakes with the flat pommel base. Measure planting depth with the handy inch marks. Saw a branch or whittle kindling with the rust-resistant doubled edge. Made for use in the backyard, camping, bush-crafting, or anywhere you need it.	24.99	19.99
871c4b1b-a9a5-4a70-afd0-3e8a0a9cc91f	JAPANESE NATA TOOL	tools	Clear brush, strip bark, plank wood, make kindling–all with one thoughtfully-crafted tool. Inspired by a traditional Japanese implement and constructed with heritage-quality materials, our Japanese Nata Tool unites versatile function and refined durability. The stainless steel machete-like blade and a solid steel core that extends through the length of the hardwood handle lend stability and greater swinging weight yet it still packs thin and light, making it an essential addition to any collection.	69.99	55.99
f97e48d5-600b-4d53-b045-da2ff44dc966	2-TONE ULTIMATE DINING BUNDLE	grill-dine	\N	307.88	292.48
f47f2993-70da-4d04-b8db-c60b5d6fa470	TELESCOPING FIRE BLOWER	grill-dine	\N	19.99	18.99
cbb040da-787c-47f9-a8e4-f26f4c9e390a	COWBOY FIRE PIT GRILL - 30"	grill-dine	\N	699.99	419.99
88d6a735-f7bc-444b-bb46-e3335d555f26	PIVOT ARC LIGHTER	grill-dine	\N	49.99	47.49
eec2fe1f-eef3-4237-b39f-1836048f4669	PROVISIONS CORKSCREW KNIFE	grill-dine	\N	69.99	41.99
3c3f75fa-20ac-4131-9753-aec1236a3bff	CULINARY KNIFE 4-PIECE SET	grill-dine	\N	399.98	239.98
0b78bbc3-46a4-4732-9e61-ab9a8b1e5658	OPEN FIRE GLOVE	grill-dine	\N	29.99	23.99
a6fe1311-2532-4ccd-8e86-043079c8a9e3	CHEF GRILLING APRON	grill-dine	\N	39.99	31.99
8b3d3a5d-fb36-4629-90f3-91ea7db1527b	RAILROAD LANTERN	lights-lanterns	\N	99.99	69.99
e1fbbd07-dba9-4d9d-a821-32fdbd0c01af	FOREST LANTERN	lights-lanterns	\N	79.99	9.99
132aba13-ecbb-4844-95e9-06e26796db35	MINERS LANTERN	lights-lanterns	\N	79.99	74.99
972394ae-0d01-45be-b701-086087bcaf4f	EDISON LIGHT STICK	lights-lanterns	\N	74.99	59.99
ce9c4e0a-191b-4482-9e10-121fb9ef0286	BRASS LIGHT SET	lights-lanterns	\N	149.98	119.98
7b2dbcbe-2a20-40c7-be14-80055c0ee380	\N	lights-lanterns	\N	79.99	9.99
3a24f5ff-25e4-408f-ad72-a51290e38101	OUTPOST LANTERN	lights-lanterns	\N	69.99	48.99
0d406ff8-9ff3-41a3-83b2-468452a0d2be	EDISON MINI LANTERN	lights-lanterns	\N	39.99	31.99
3706cbfc-c479-438e-8a22-da0f69b74c92	BEACON HANGING LIGHT	lights-lanterns	\N	64.99	45.49
ac1f54e5-71e1-4cc8-81ad-e19b3d48debe	JAPANESE NATA HATCHET	tools	\N	69.99	55.99
02beeea3-b3d4-421e-a308-37738de2411f	FELLING AXE	tools	\N	109.99	76.99
c0802d3d-bf71-43e5-87b9-6f3f2a76d8f3	PULASKI AXE	tools	\N	179.99	125.99
25f8c22f-e009-4d07-a0b4-b79ef15c7b42	FIELD HATCHET	tools	\N	69.99	55.99
dec0583d-28b9-4efb-bba1-7ec327c6563e	NO.6 FIELD KNIFE	tools	\N	79.99	55.99
27899788-b08c-412c-9187-43a4bd8dac93	TIMBER SAW	tools	\N	79.99	55.99
d754e909-d35e-4e75-8dbc-7e7fdbfcb262	HORI HORI CLASSIC	tools	\N	22	17.6
1be456ba-e676-4503-93f3-e4c2d2aaaf94	NEELUM DUFFEL BAG	store-carry	\N	69.99	55.99
753c3c2e-f12d-456b-9e41-93f16b251c92	NEELUM DOPP KIT	store-carry	\N	29.99	28.49
af4a4c74-37f0-42ed-aa6d-e8bf15ec1d11	NEELUM TOTE BAGS	store-carry	\N	44.99	42.74
55135cc9-975e-4e47-a3a3-3c2b38808390	NEELUM ZIPPER POUCHES	store-carry	\N	19.99	15.99
3c8b236a-1dba-4739-b612-42afbacc23dc	HARVESTING & GATHERING BAG	store-carry	\N	79.99	55.99
062aa630-a73b-4e66-b7c5-ce820dd963e2	FIRE PIT GRILL GRATE CARRY BAG	store-carry	\N	24.99	23.74
0a6d1c50-b41e-4a5f-afba-c04f7ae486a0	COWBOY GRILL CHARCOAL TRAY CARRY BAG	store-carry	\N	29.99	28.49
6dd562ad-583e-4c1b-801f-9c93d417c989	HEAVY DUTY GRILL GRATE CARRY BAG	store-carry	\N	29.99	28.49
8bae27ef-0d8f-43f3-b0b2-46b9ddf26394	COWBOY GRILL COVER	store-carry	\N	34.99	33.24
\.


--
-- Data for Name: products_images; Type: TABLE DATA; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

COPY public.products_images (id, image, product_id) FROM stdin;
f99c80d1-29e3-432e-a3e8-5fa4241be2f3	product_1.png	efa386dc-09c0-4d80-9435-df9476b52ce8
f2d65d46-748b-4d66-8848-020463057759	product_1_1.png	efa386dc-09c0-4d80-9435-df9476b52ce8
1cb536c7-060c-42f6-9998-56a933577eb6	product_1_2.png	efa386dc-09c0-4d80-9435-df9476b52ce8
978fc32c-5d59-40d0-9589-a4f3fc2980a2	product_1_3.png	efa386dc-09c0-4d80-9435-df9476b52ce8
b9348bb3-3e75-485d-be30-a8723d7846a4	product_1_4.png	efa386dc-09c0-4d80-9435-df9476b52ce8
95f6d9d9-44d2-4161-b897-18c126fd83b7	product_2.png	642f58f0-fe06-4ca8-8d06-80f0a13df015
ae80cdb9-88b2-496d-b6f8-b02b7ad55da8	product_2_1.png	642f58f0-fe06-4ca8-8d06-80f0a13df015
400bbf53-daef-4157-94e1-ddf91cc82581	product_2_2.png	642f58f0-fe06-4ca8-8d06-80f0a13df015
8759f639-ddba-4de8-98cc-c502aa416139	product_2_3.png	642f58f0-fe06-4ca8-8d06-80f0a13df015
6ebe1d15-9378-46ee-8cf1-2a85f5081f0b	product_2_4.png	642f58f0-fe06-4ca8-8d06-80f0a13df015
938b2825-ef19-40c9-86ab-434e7f8d9a27	product_3.png	871c4b1b-a9a5-4a70-afd0-3e8a0a9cc91f
4751c3d8-6233-4301-9426-a9d5e74493c6	product_3_1.png	871c4b1b-a9a5-4a70-afd0-3e8a0a9cc91f
e546bb9b-c998-4d5b-9232-61d7f3695cfd	product_3_2.png	871c4b1b-a9a5-4a70-afd0-3e8a0a9cc91f
46c112ec-688c-4393-a2b5-eff09743b32c	product_3_3.png	871c4b1b-a9a5-4a70-afd0-3e8a0a9cc91f
655596ae-8105-4bf1-a377-bc5b5919eeb9	product_3_4.png	871c4b1b-a9a5-4a70-afd0-3e8a0a9cc91f
2649cb44-02c9-44b9-8276-2c16a192ac28	product_4.png	f97e48d5-600b-4d53-b045-da2ff44dc966
abaa416a-224a-4f6b-9083-2cce8f382ca8	product_5.png	f47f2993-70da-4d04-b8db-c60b5d6fa470
a1549e3c-d5c4-4bfd-b4a4-cce40cbe2cad	product_6.png	cbb040da-787c-47f9-a8e4-f26f4c9e390a
0416647e-2c18-400d-96d7-8fc287da1cd5	product_7.png	88d6a735-f7bc-444b-bb46-e3335d555f26
5a383943-c315-4a46-888f-bf33e2bdd224	product_8.png	eec2fe1f-eef3-4237-b39f-1836048f4669
f554dd14-9c27-4216-9ef5-02f48583c87d	product_9.png	3c3f75fa-20ac-4131-9753-aec1236a3bff
e887ff92-97c1-485e-8070-3aaaf33fd5d9	product_10.png	0b78bbc3-46a4-4732-9e61-ab9a8b1e5658
5a76332d-73c7-490a-85a1-5a03884a43c8	product_11.png	a6fe1311-2532-4ccd-8e86-043079c8a9e3
a5282340-e3e3-4b19-9034-c97f826ea05d	product_12.png	8b3d3a5d-fb36-4629-90f3-91ea7db1527b
528c3f64-be6d-4718-8787-3bf77be7cc78	product_13.png	e1fbbd07-dba9-4d9d-a821-32fdbd0c01af
05173412-7389-4f75-9b31-2c02ef42f652	product_14.png	132aba13-ecbb-4844-95e9-06e26796db35
6a79565b-f9df-42f9-8532-c147cf61f55c	product_15.png	972394ae-0d01-45be-b701-086087bcaf4f
9a62f64a-7e68-44ab-93a3-3c47fd89cda7	product_16.png	ce9c4e0a-191b-4482-9e10-121fb9ef0286
bc52c84c-6a5c-4a5f-a755-59aa3edcbdb2	product_17.png	7b2dbcbe-2a20-40c7-be14-80055c0ee380
92a41e0f-26f1-4b83-b0cc-c027afd59658	product_18.png	3a24f5ff-25e4-408f-ad72-a51290e38101
cf59b157-3dda-46c9-bdbe-d249a9a5a04a	product_19.png	0d406ff8-9ff3-41a3-83b2-468452a0d2be
750c7ec8-ffec-4e2e-86ac-2094d3dcc1ff	product_20.png	3706cbfc-c479-438e-8a22-da0f69b74c92
8bea55b1-e77a-446c-b14c-fae31fba8aa0	product_21.png	ac1f54e5-71e1-4cc8-81ad-e19b3d48debe
c5e9d8f3-d178-46d9-8ac0-2b0d591ec664	product_22.png	02beeea3-b3d4-421e-a308-37738de2411f
2612f9c7-081a-4669-be4f-1e2720a78665	product_23.png	c0802d3d-bf71-43e5-87b9-6f3f2a76d8f3
82c5a124-d99b-4c87-9e59-966eaee646a0	product_24.png	25f8c22f-e009-4d07-a0b4-b79ef15c7b42
a2d244d0-8258-4eb7-8fe7-cfd718c93bbb	product_25.png	dec0583d-28b9-4efb-bba1-7ec327c6563e
d53c14ca-ca79-4a01-8457-403d919e4ab1	product_26.png	27899788-b08c-412c-9187-43a4bd8dac93
9c0a666f-d2a9-4236-8edf-66adfc4fa3f0	product_27.png	d754e909-d35e-4e75-8dbc-7e7fdbfcb262
69b319b2-ba1a-4112-9eb2-fb40e6cd5435	product_28.png	1be456ba-e676-4503-93f3-e4c2d2aaaf94
26764658-334d-432d-9d46-ef52fd0104ac	product_29.png	753c3c2e-f12d-456b-9e41-93f16b251c92
af30c6ac-e1cc-45e2-a4f9-167070ed52eb	product_30.png	af4a4c74-37f0-42ed-aa6d-e8bf15ec1d11
1753a057-c1ba-40f0-93d4-d388181efb81	product_31.png	55135cc9-975e-4e47-a3a3-3c2b38808390
30f48483-1904-4e09-81f7-98a03fa4bc33	product_32.png	3c8b236a-1dba-4739-b612-42afbacc23dc
745fe9a1-3f48-4b75-a1d3-ea6d441ad61d	product_33.png	062aa630-a73b-4e66-b7c5-ce820dd963e2
2eea0557-defb-488d-bf59-a2f01a6c5809	product_34.png	0a6d1c50-b41e-4a5f-afba-c04f7ae486a0
87043089-c992-4862-949a-f8943e8a8298	product_35.png	6dd562ad-583e-4c1b-801f-9c93d417c989
c4f101a8-3853-4f8a-840d-312ad2b45f7b	product_36.png	8bae27ef-0d8f-43f3-b0b2-46b9ddf26394
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

COPY public.users (id, name, email, password, created, updated, role) FROM stdin;
\.


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (product_id, user_id);


--
-- Name: products_images products_images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.products_images
    ADD CONSTRAINT products_images_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: carts carts_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: carts carts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: products_images products_images_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres.darahqvsxaqohrrpotfh
--

ALTER TABLE ONLY public.products_images
    ADD CONSTRAINT products_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- PostgreSQL database dump complete
--

