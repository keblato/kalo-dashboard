import { Login } from "@/models";
import axios from "axios";

export class AuthRepository {
  private static instance: AuthRepository;
  apiUrl: string;

  private constructor() {
    const { KALO_API_URL } = process.env;
    if (!KALO_API_URL) {
      throw new Error("KALO_API_URL must be defined");
    }
    this.apiUrl = KALO_API_URL;
  }

  public static getInstance(): AuthRepository {
    if (!AuthRepository.instance) {
      AuthRepository.instance = new AuthRepository();
    }
    return AuthRepository.instance;
  }

  async signIn(login: Login) {
    try {
      console.log("Enter to login");
      const res = await axios.post(`${this.apiUrl}/dev/login`, login);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error("LOGIN_ERROR");
    }
  }
}
