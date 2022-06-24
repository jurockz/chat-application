package com.jurek.chatappapi.controller;

import com.jurek.chatappapi.model.Chat;
import com.jurek.chatappapi.model.Message;
import com.jurek.chatappapi.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api")
@CrossOrigin("*")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @GetMapping("/{sender}/get-messages/{receiver}")
    public List<Message> getPrivateMessages(@PathVariable String sender, @PathVariable String receiver) {
        return messageService.getPrivateMessages(sender, receiver);
    }

    @GetMapping("/{user}/get-conversation-summary-list")
    public  List<Chat> getChats(@PathVariable String user) {
        return messageService.getChats(user);
    }

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/send-private")
    public  Message sendPrivateMessage(@Payload Message message) {
        simpMessagingTemplate.convertAndSendToUser(message.getReceiver(),"/private", message);
        messageService.saveMessage(message);
        return message;
    }
}
