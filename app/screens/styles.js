import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
  },
  searchContainer: {
    paddingRight: 8,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  history: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "baseline",
    justifyContent: "center",
  },
  historyHeader: {
    top: 35,
    left: 15,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  historyHead: {
    color: "#2c3e50",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 4,
  },
  historyContent: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  historyList: {
    left: 15,
    top: -95,
    flexDirection: "row",
  },
  historyItem: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16,
  },
});

export const SearchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  content: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  mean: {
    color: "#2f3640",
  },
  span: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
});

export const DetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  details: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  head: {
    fontWeight: "700",
    fontSize: 22,
    color: "#2c3e50",
    marginBottom: 3,
  },
  content: {
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
  },
  muted: {
    textAlign: "right",
    color: "#2c3e50",
  },
});
