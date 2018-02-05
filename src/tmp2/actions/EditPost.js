import React from "react"

import expect from "expect"
import deepFreeze from "deep-freeze"

const addPost = (state, action) => [
	...state,
	{
		id: action.id,
		title: action.title,
		author: action.author,
		published: action.published,
	},
]

const editPost = (posts, edit) => [
	...posts.filter(id => id !== edit.id),
	{
		...edit,
	},
]

const posts = (state = [], action) => {
	switch (action.type) {
	case "ADD_POST":
		return addPost(state, action)
	case "EDIT_POST":
		return editPost(state, action)
	default:
		return state
	}
}

// Snapshot
// =============

let nextPostId = 0
const stateBefore = []
const action = {
	type: "ADD_POST",
	id: nextPostId++,
	title: "Learn React",
	author: "John Doe",
	published: "2018-0-31",
}
const stateAfter = [
	{
		id: 0,
		title: "Learn React",
		author: "John Doe",
		published: "2018-0-31",
	},
]

// ==============
// End of Snapshot

deepFreeze(stateBefore)
deepFreeze(action)

expect(addPost(stateBefore, action)).toEqual(stateAfter)

console.log("adding new post...\n", addPost(stateBefore, action))

const App = () => (
	<div>
		{
			posts(stateBefore, action).map(post => (
				<div key={post.id}>
					<h3>Title: {post.title}</h3>
					<h5>Author: {post.author}</h5>
					<h5>Published Date: {post.published}</h5>
				</div>
			))
		}
	</div>
)
export default App
