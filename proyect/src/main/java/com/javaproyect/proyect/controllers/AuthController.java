package com.javaproyect.proyect.controllers;

import com.javaproyect.proyect.dao.UserDao;
import com.javaproyect.proyect.models.User;
import com.javaproyect.proyect.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JWTUtil jwtUtil;


    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody User user){

        User userLogged = userDao.getUserByCredentials(user);
        if(userLogged != null){

            String tokenJwt = jwtUtil.create(String.valueOf(userLogged.getId()), userLogged.getEmail());

            return tokenJwt;
        }
        return "FAIL";
    }
}
