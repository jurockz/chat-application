package com.jurek.chatappapi.service;

import com.jurek.chatappapi.model.*;
import com.jurek.chatappapi.model.Chat;
import com.jurek.chatappapi.model.Message;
import com.jurek.chatappapi.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;

    private final Comparator<Message> messageLatesToBottom = (m1, m2) -> (int) (m1.getCreated_at() - m2.getCreated_at());

    private final Comparator<Chat> chatLatestToTop = (c1, c2) -> (int) (c2.getCreated_at() - c1.getCreated_at());

    public void saveMessage(Message message) {
        messageRepository.save(message);
    }

    public List<Message> getPrivateMessages(String sender, String receiver) {
        return Stream.concat(
                messageRepository.findMessageBySenderAndReceiver(sender, receiver).stream(),
                messageRepository.findMessageBySenderAndReceiver(receiver, sender).stream())
                .sorted(messageLatesToBottom)
                .collect(Collectors.toList());
    }

    public List<Chat> getChats(String user) {
        return messageRepository.findMessageBySenderOrReceiver(user, user).stream()
                .collect(Collectors.groupingBy( (Message message) -> message.getSender().equals(user) ? message.getReceiver() : message.getSender(),
                        Collectors.reducing((left, right) -> left.getCreated_at() > right.getCreated_at() ? left : right)))
                .entrySet().stream()
                .map(message -> new Chat(
                        message.getKey(), message.getValue().get().getContent(), message.getValue().get().getCreated_at()
                ))
                .sorted(chatLatestToTop)
                .collect(Collectors.toList());
    }

}
