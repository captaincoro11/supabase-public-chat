<h1>SupaBase Public Chat</h1>

# Instructions to run this site

# First clone this repo
```bash
git clone https://github.com/captaincoro11/supabase-public-chat.git
```
## Instructions for running the server

## .env file example for server
create a .env file inside the server/supabase/functions directory
example of .env file 
```bash
URL = ""  //Your SupaBase URL
KEY = ""  //Your Supabase anom key
```

## After this make sure your Docker Desktop is installed and opened and now run these commands to run the server

```bash
$ supabase start
$ supabase functions serve

```

## This would get your server running at localhost:54321

## Instructions for running the client

## .env file example for the client
make a .env file inside the client directory
example of .env file

```bash

REACT_APP_SUPABASE_URL= ""   // Your Supabase URL Here
REACT_APP_SUPABASE_ANON_KEY=""  //Your Supabase Key here



```
## After setting up the .env file install all the dependencies

```bash
$ cd client
$ npm install
$ npm start
```


## This would get your client running 

# Some ScreenShots of the chat made

![Screenshot 2024-09-06 144206](https://github.com/user-attachments/assets/c5dd029a-cc7f-4c79-8094-0a695947d5c9)
![Screenshot 2024-09-06 144200](https://github.com/user-attachments/assets/581131dc-5310-4ff4-af5f-bed23610f3e4)

![Screenshot 2024-09-06 144150](https://github.com/user-attachments/assets/a30c51ca-ad19-44a6-b42c-2dcd7c6ddf25)
![Screenshot 2024-09-06 144139](https://github.com/user-attachments/assets/5e953b97-0267-486f-a58f-27b550dfacab)

