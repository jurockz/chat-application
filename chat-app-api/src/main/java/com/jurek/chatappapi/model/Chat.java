package com.jurek.chatappapi.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Chat {
    private String chat_name;
    private String last_message;
    private long created_at;
}
