### DAy 13: Flask App Authentication using JWT

- Traditional approach (Cookies & Sessions):
    user login -> submit to server and stores a session ID -> sends session ID to your device and saves in cookie (key-value pair) -> every request will have the cookie with it -> server responds successfully if logged in
    - Suspectable to hacking as sessions are stored in database
- Stateful Protocol saves everything in backend (Stateless saves in client side)
-JWT:
    user login -> server creates JWT (key) and sends to client and saved in local storage
    JEW in auth header when making requests -> server matches signature


Secret Key Generation
1. OS
    `python`
    `import os`
    `os.urandom(12)`

2. UUID
    `import uuid`
    `uuid.uuid4().hex`

3. Secrets
    `import secrets`
        `secrets.token_urlsafe(12)`\

