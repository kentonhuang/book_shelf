import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import BookView from './components/Books/BookView';
import Layout from './hoc/layout';
import Login from './containers/Admin/Login';
import User from './components/Admin/User';
import AddReview from './containers/Admin/AddReview';
import UserPosts from './components/Admin/UserPosts';
import EditReview from './containers/Admin/EditReview';
import Register from './containers/Admin/Register';
import Logout from './components/Admin/Logout';

import Auth from './hoc/auth';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Auth(Home, null)} />
				<Route path="/login" exact component={Auth(Login, false)} />
				<Route path="/user/logout" exact component={Auth(Logout, true)} />
				<Route path="/user" exact component={Auth(User, true)} />
				<Route path="/user/add" exact component={Auth(AddReview, true)} />
				<Route path="/user/register" exact component={Auth(Register, true)} />
				<Route path="/user/edit-post/:id" exact component={Auth(EditReview, true)} />
				<Route path="/books/:id" exact component={Auth(BookView, null)} />
				<Route path="/user/user-reviews" exact component={Auth(UserPosts, true)} />
			</Switch>
		</Layout>
	);
};

export default Routes;