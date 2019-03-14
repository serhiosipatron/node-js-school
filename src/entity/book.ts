import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinTable } from 'typeorm';
import { Length } from "class-validator";
import { User } from './user';

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 80
    })
    @Length(1,80)
    name: string;

    @Column({
        type: 'text'
    })
    @Length(1,100)
    description: string;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(type => User, user => user.books)
    @JoinTable({ name: 'user_id'})
    user: User;
}