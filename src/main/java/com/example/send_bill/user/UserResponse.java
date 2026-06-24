package com.example.send_bill.user;

public class UserResponse {

    private Long id;
    private String name;
    private String email;
    private String fileUrl;

    public UserResponse() {}

    public UserResponse(Long id, String name, String email, String fileUrl) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.fileUrl = fileUrl;
    }

    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getFilePath());
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getFileUrl() { return fileUrl; }
    public void setFileUrl(String fileUrl) { this.fileUrl = fileUrl; }
}
