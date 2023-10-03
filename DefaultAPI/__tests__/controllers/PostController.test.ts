import {Post} from "../../src/entity/Post";

describe('Get All Posts', () => {
    it('it should get a post', async () => {
        const response = await fetch('http://localhost:3000/posts/2');

        expect(response.status).toEqual(200);

        const data = await response.json();
        expect(data).toMatchObject({
            id: 1,
            title: 'Title Post 1',
            description: 'Description Post 1',
        })

        console.log(data);
    });

});