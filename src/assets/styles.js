import { Constants } from "./../config/constants";
export const styles = {
  activeLeftMenuItem: {
    backgroundColor: "transparent",
    border: 0,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: Constants.BASE_COLOR
  },
  inactiveLeftMenuItem: {
    backgroundColor: "transparent",
    border: 0,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000"
  },
  tagStyle: {
    backgroundColor: Constants.TAG,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    borderColor: Constants.BASE_COLOR,
    color: Constants.BASE_COLOR,
    fontSize: 14,
    marginRight: 30
  },
  rowItem: {
    marginTop: 20,
    backgroundColor: "#fff",
    boxShadow: `1px 1px 1px #ccc`,
    borderRadius: 10,
    width: 700,
    marginLeft: 0,
    padding: 30
  }
};
