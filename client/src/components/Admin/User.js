import React from 'react';

const User = (props) => {
	const { login } = props.user
	return (
		<div className="user_container">
			<div className="avatar">
				<img alt="avatar" src="/images/avatar.png" />
			</div>
			<div className="nfo">
				<div><span>Name:</span> {login.name}</div>
				<div><span>Lastname:</span> {login.lastname}</div>
				<div><span>Email:</span> {login.email}</div>
			</div>
		</div>
	);
};

export default User;