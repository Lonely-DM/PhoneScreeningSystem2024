# API Documentation

## Setup

1. Install dependencies:
   ```bash
   npm i
   ```
2. Add MongoDB URL in index.js
3. Run in development mode with nodemon:
   ```bash
   npm run dev
   ```
4. Or run normally:
   ``bash
   npm run serve
   ```

## API Info

### User Management

#### Create User
- **Endpoint:** `POST /api/users`
- **Description:** Create a new user.
- **Request Body:** User details (name, phone number, address, age, role, username, password).
- **Response:** Newly created user details.

#### Get User Profile
- **Endpoint:** `GET /api/users/{userID}`
- **Description:** Get details of a specific user.
- **Response:** User details.

#### Update User Profile
- **Endpoint:** `PUT /api/users/{userID}`
- **Description:** Update user profile information.
- **Request Body:** Updated user details.
- **Response:** Updated user details.

#### Delete User
- **Endpoint:** `DELETE /api/users/{userID}`
- **Description:** Delete a user account.
- **Response:** Success message.

### Ticket Management

#### Create Ticket
- **Endpoint:** `POST /api/tickets`
- **Description:** Create a new ticket.
- **Request Body:** Ticket details (callerID, description, priority).
- **Response:** Newly created ticket details.

#### Get Ticket Details
- **Endpoint:** `GET /api/tickets/{ticketID}`
- **Description:** Get details of a specific ticket.
- **Response:** Ticket details.

#### Update Ticket Status
- **Endpoint:** `PUT /api/tickets/{ticketID}`
- **Description:** Update ticket status (e.g., mark as resolved).
- **Request Body:** Updated ticket status.
- **Response:** Updated ticket details.

#### List User's Tickets
- **Endpoint:** `GET /api/users/{userID}/tickets`
- **Description:** Get a list of tickets associated with a specific user.
- **Response:** List of ticket details.

### Call Handling

#### Record Call
- **Endpoint:** `POST /api/calls`
- **Description:** Record a call and save call details.
- **Request Body:** Call details (callerID, duration, transcription, audio file).
- **Response:** Success message.

#### Get Call Details
- **Endpoint:** `GET /api/calls/{callID}`
- **Description:** Get details of a specific call.
- **Response:** Call details.

### Caller Management

#### Create Caller
- **Endpoint:** `POST /api/callers`
- **Description:** Create a new caller.
- **Request Body:** Caller details.
- **Response:** Newly created caller details.

#### Get Caller Details
- **Endpoint:** `GET /api/callers/{callerID}`
- **Description:** Get details of a specific caller.
- **Response:** Caller details.
