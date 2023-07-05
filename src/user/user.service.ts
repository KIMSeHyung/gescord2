import { Injectable } from "@nestjs/common";

export type User = {
    id: number;
    name: string;
    password: string;
};

@Injectable()
export class UserService {
    private readonly users = [
        {
            id: 1,
            name: "test1",
            password: "111",
        },
        {
            id: 2,
            name: "test2",
            password: "111",
        },
    ];

    async findOne(id: number): Promise<User | undefined> {
        return this.users.find((user) => user.id === +id);
    }
}
