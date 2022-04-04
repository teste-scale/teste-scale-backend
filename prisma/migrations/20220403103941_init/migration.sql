-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'george.bluth@reqres.in',
        'George',
        'Bluth',
        'https://reqres.in/img/faces/1-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'janet.weaver@reqres.in',
        'Janet',
        'Weaver',
        'https://reqres.in/img/faces/2-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'emma.wong@reqres.in',
        'Emma',
        'Wong',
        'https://reqres.in/img/faces/3-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'eve.holt@reqres.in',
        'Eve',
        'Holt',
        'https://reqres.in/img/faces/4-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'charles.morris@reqres.in',
        'Charles',
        'Morris',
        'https://reqres.in/img/faces/5-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'tracey.ramos@reqres.in',
        'Tracey',
        'Ramos',
        'https://reqres.in/img/faces/6-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'michael.lawson@reqres.in',
        'Michael',
        'Lawson',
        'https://reqres.in/img/faces/7-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'lindsay.ferguson@reqres.in',
        'Lindsay',
        'Ferguson',
        'https://reqres.in/img/faces/8-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'tobias.funke@reqres.in',
        'Tobias',
        'Funke',
        'https://reqres.in/img/faces/9-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'byron.fields@reqres.in',
        'Byron',
        'Fields',
        'https://reqres.in/img/faces/10-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'george.edwards@reqres.in',
        'George',
        'Edwards',
        'https://reqres.in/img/faces/11-image.jpg'
    );
INSERT INTO User(email, first_name, last_name, avatar)
VALUES (
        'rachel.howell@reqres.in',
        'Rachel',
        'Howell',
        'https://reqres.in/img/faces/12-image.jpg'
    );