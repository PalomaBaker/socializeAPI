# Social Network API

This is a social network API that allows users to create, update, and delete users, thoughts, reactions, and friends.

## Features

- User management: Create, update, and delete users.
- Thought management: Create, update, and delete thoughts.
- Reaction management: Create and delete reactions to thoughts.
- Friend management: Add and remove friends from a user's friend list.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:
    git clone <repository-url>

2. Navigate to the project directory:
    cd social-network-api

3. Install the dependencies: 
    npm install


4. Set up the environment variables:
- Create a `.env` file in the root directory.
- Define the following environment variables:
  ```
  MONGODB_URI=<your-mongodb-uri>
  ```

5. Start the server:
    npm start


6. The API is now running on `http://localhost:3000`.

## API Documentation

For detailed information on the API endpoints and how to use them, please refer to the [API documentation](API.md).

## Examples

Here are some examples of how to use the API endpoints:

### User Management

- Create a new user:
    POST/api/users

- Update a user: 
    PUT/api/users/:id

- Delete a user:
    DELETE/api/users/:id

### Thought Managment

- Create a new thought: 
    -POST/api/thoughts

- Update a thought:
    -DELETE/api/thoughts/:id


### Reaction Management

- Create a new reaction to a thought:
POST /api/thoughts/:thoughtId/reactions



- Delete a reaction:
DELETE /api/thoughts/:thoughtId/reactions/:reactionId



### Friend Management

- Add a friend to a user's friend list:
POST /api/users/:userId/friends/:friendId



- Remove a friend from a user's friend list:
DELETE /api/users/:userId/friends/:friendId



## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact [Paloma Baker] at [paloma.d.baker@gmail.com].

Feel free to contribute to the project by submitting a pull request.
