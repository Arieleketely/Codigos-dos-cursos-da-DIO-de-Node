
const user={name = 'Ariele',lastName=`Ketely do Carmo`};
function getUserWithFullName(user){
    return {
        ...user,
        FullName: '${user.name} {user.lastName}'
    }

}
const UserWithFullName=getUserWithFullName(user);
console.log(getUserWithFullName, user);
