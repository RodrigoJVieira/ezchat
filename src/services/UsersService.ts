import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){
         // verificar se usuario existe
        const userExists = await this.usersRepository.findOne({
            email,
        });

        // Se existir, retornar user
        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        //caso não exista, salvar no DB
        return user;

    }
    async findByEmail(email: string){
        const userExists = await this.usersRepository.findOne({
            email});
            
        return userExists;
    }
}

export { UsersService }