package g12.projserver.models;

public enum Role {
    ADMIN("ADMIN"),
    WAITER("WAITER"),
    CHEF("CHEF");

    Role(String admin) {
    }

    public static void main(String[] args) {
        for (Role r: Role.values()) System.out.println(r);
        System.out.println(Role.ADMIN);
    }
}
