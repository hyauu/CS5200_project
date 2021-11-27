package g12.projserver.models;

public enum ServeTime {
    BREAKFAST("BREAKFAST"),
    LUNCH("LUNCH"),
    DINNER("DINNER");

    ServeTime(String admin) {
    }

    public static void main(String[] args) {
        for (ServeTime r: ServeTime.values()) System.out.println(r);
    }
}
