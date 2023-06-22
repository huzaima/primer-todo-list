## React Todo List

This exercise aims to create a working todo list app. To start with, we have premade styles for todo items. Although there’s no operating mechanism for adding, completing, and deleting a todo.

## READ ALL THE INSTRUCTIONS BELOW BEFORE STARTING THE EXERCISE

## Requirements

1. The todo list state should be loaded from the API.
2. User should be able to add todo.
3. Clicking on a todo item should complete the todo in the backend via API.
4. Allow todos to be deleted. There should be a button 'X' on the far right side. Clicking the X should delete the todo in the backend.
5. The most recently added todo should appear on the top.
6. [Bonus] There should be a search bar to search through the todos. It should support client-side fuzzy matching.

## Notes:
1. You are free to use Google for any help you need.
2. You are free to use any npm package.
3. Your assessment will be done based on: 
   - completeness of requirements
   - React best practices.
   
## API Reference:
1. Get all todos:
	- `curl -X GET https://api.todoist.com/rest/v2/tasks -H "Authorization: Bearer $token"`
2. Create todo:
	- `curl https://api.todoist.com/rest/v2/tasks -X POST --data '{"content": "Buy Milk"}' -H "Authorization: Bearer $token" -H "Content-Type: application/json"`
3. Complete todo:
	- `curl -X POST "https://api.todoist.com/rest/v2/tasks/:id/close" -H "Authorization: Bearer $token"`
4. Delete todo:
	- `curl -X DELETE "https://api.todoist.com/rest/v2/tasks/:id" -H "Authorization: Bearer $token"`