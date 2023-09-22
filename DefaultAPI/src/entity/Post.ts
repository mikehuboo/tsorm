import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('posts')
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    user_id: number
}