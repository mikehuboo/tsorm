import {AppDataSource} from "../data-source"
import {NextFunction, Request, Response} from "express"
import {Post} from "../entity/Post"

export class PostController {

    private postRepository = AppDataSource.getRepository(Post)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.find(
            {
                relations: {
                    user: true,
                },
            }
        )
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const post = await this.postRepository.findOne({
            where: {id}
        })

        if (!post) {
            return "invalid post"
        }
        return post
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const {title, description, user_id} = request.body;

        const post = Object.assign(new Post(), {
            title,
            description,
            user_id
        })

        return this.postRepository.save(post)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let postToRemove = await this.postRepository.findOneBy({id})

        if (!postToRemove) {
            return "this post does not exist"
        }

        await this.postRepository.remove(postToRemove)

        return "post has been removed"
    }

}