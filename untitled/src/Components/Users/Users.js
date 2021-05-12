import React from "react";
import Paginator from "../../AnotherThings/Paginator/Paginator";
import User from "./User";


const Users = (props) => {


    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                totalCount={props.totalCount}
                onPageChanged={props.onPageChanged}
            />
            <User
                users={props.users}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        </div>
    );
}

export default Users;