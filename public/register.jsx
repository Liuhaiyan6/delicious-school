import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Register extends Component {
    render() {
        return (
            <div>
                <form >
                    用户名：
                    <input id="name" name="name" type="text"/><br />
                    密 码：
                    <input id="password" name="password" type="password" /><br />
                    <Link to='/main'><input id="submit" type="submit" value="注册"/></Link>
                </form>
            </div>
        )}
}


