package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/")
public class MainController {
    @Controller
    public class MyController {
        @RequestMapping("/logout")
        public String logout(HttpServletRequest request) {
            request.getSession().invalidate();
            SecurityContextHolder.clearContext();
            System.out.println("--------------------------------------------------------------------");
            return "redirect:/index";
        }
    }

}
