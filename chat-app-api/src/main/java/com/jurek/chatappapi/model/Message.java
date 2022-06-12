package com.jurek.chatappapi.model;

import lombok.*;

import javax.persistence.*;

@Entity(name = "message")
@Table(name = "MESSAGE")
@Getter @Setter @NoArgsConstructor @ToString
public class Message {

    @Id
    @SequenceGenerator(name = "message_sequence", sequenceName = "message_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "message_sequence")
    @Setter(value = AccessLevel.NONE)
    private long id;

    @Column(name = "MESSAGE_CONTENT")
    private String content;
    @Column(name = "SENDER")
    private String sender;
    @Column(name = "RECEIVER")
    private String receiver;
    @Column(name = "CREATED_AT")
    private long created_at;

    @Column(name = "TYPE", updatable = false)
    @Enumerated(value = EnumType.STRING)
    private Status type;
}

