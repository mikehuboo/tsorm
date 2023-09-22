import {AppDataSource} from "./data-source"

import {User} from "./entity/User"
import {Post} from "./entity/Post"

AppDataSource.initialize().then(async () => {

    let user1 = await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "User 1",
            lastName: "Assassin",
            age: 24
        })
    )

    const post1 = new Post();
    post1.title = "Title Post 1";
    post1.description = "Description Post 1";
    post1.user = user1;

    await AppDataSource.manager.save(post1);

    const post11 = new Post();
    post11.title = "Title Post 11";
    post11.description = "Description Post 11";
    post11.user = user1;

    await AppDataSource.manager.save(post11);

    let user2 = await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "User 2",
            lastName: "Assassin",
            age: 36
        })
    )

    const post2 = new Post();
    post2.title = "Title Post 2";
    post2.description = "Description Post 2";
    post2.user = user2;

    await AppDataSource.manager.save(post2);

    console.log("Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
