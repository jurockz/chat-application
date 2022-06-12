package com.jurek.chatappapi.repository;

import com.jurek.chatappapi.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findMessageBySenderAndReceiver(String sender, String receiver);

    List<Message> findMessageBySenderOrReceiver(String sender, String receiver);
}
