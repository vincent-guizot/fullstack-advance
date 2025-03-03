import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  //   process.env.SUPABASE_URL,
  //   process.env.SUPABASE_KEY
  "https://wmalfvjbirdklqbsfaav.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtYWxmdmpiaXJka2xxYnNmYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NjM4OTcsImV4cCI6MjA1NjUzOTg5N30.ZnjyEZDUcUPZZg69DkfbJDr_G4Cu0r0tRSyLunSK9R8"
);

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await supabase.from("users").select("*");
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  }
}

export default UserController;
