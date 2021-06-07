# Aula 51 - Introdução a Autenticação

## Exercício 1

### **a-)** 
Na comparação entre utilizar string ou number para um id, a melhor opção seria uma string, fazendo com que o id seja mais seguro, com sequencia totalmente aleatorio e mais dificil de se repetir.

### **b-)** 
```
import { v4 } from "uuid"

export const generatedId = (): string => {
    const id = v4();
    return id
}

```

## Exercício 2

### **a-)** 
A primeira parte do código fará o acesso ao banco de dados com o seu usuário, senha etc. 
E a segunda parte criará um usuário com is, email e senha.

### **b-)** 
```
CREATE TABLE RegisterUser (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

```

### **C-)** 
```
const createUser = async (
    id: string, 
    email: string, 
	password: string) => {
    await connection
        .insert({
        id,
        email,
        password,
    })
    .into("RegisterUser");
};
```

## Exercício 3

### **a-)**
Restringe que o valor que receberá alí será uma string.

### **b-)**
```
import * as jwt from 'jsonwebtoken'

export type authenticationData = {
    id: string
}

export const generateToken = (payload: authenticationData): string => {
    return jwt.sign(
        payload,
        "",
        {
            expiresIn: "1min"
        }
    )

}
```

## Exercício 4

### **b-)** 
```
    const { email } = req.body

    if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
    }
```

### **c-)** 
```
    const { password } = req.body

    if (!password || password.length < 6) {
        throw new Error("Invalid password");
    }
```

## Exercício 5

### **a-)** 
```
const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connections
        .select("*")
        .from('RegisterUser')
        .where({ email });

    return result[0];
}
```

## Exercício 6

### **b-)** 
```
 const user = await verifyEmail(userData.email);
  
        if (user.password !== userData.password) {
          throw new Error("Invalid password");
        }

```

## Exercício 7

### **a-)** 
Indica que o valor que irá chegar pode ser de qualquer tipo, evitando possíveis erros.

### **b-)** 
```
import * as jwt from "jsonwebtoken";

export const getTokenData =  (token: string ): authenticationData => {
    const result: authenticationData = jwt.verify(
        token,
        ""
     ) as authenticationData

     return result
}
```

## Exercício 8

### **a-)** 

```
export const getUserById = async (id: string): Promise<any> => {
    const result = await connections
        .select("*")
        .from('RegisterUser')
        .where({ id });

    return result[0];
}
```

### **b-)** 
```
route.get("/profile", async (req, res) => {
    try {
        
      const token = req.headers.authorization as string;
       
      const authenticationData = getTokenData(token);
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
```