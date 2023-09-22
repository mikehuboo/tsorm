import { AppDataSource } from "./data-source"

import { User } from "./entity/User"
import { Post } from "./entity/Post"

AppDataSource.initialize().then(async () => {

    // insert new users for test
    let user1 = await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Post, {
            title: "Title",
            description: "Description",
            user_id: user1['id'],
        })
    )


    let user2 = await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Post, {
            title: "Title2",
            description: "Description2",
            user_id: user2['id'],
        })
    )

    console.log("Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
