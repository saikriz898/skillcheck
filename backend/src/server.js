import app from "./app.js";
import config from "./config/index.js";

app.listen(config.port, () => {
  console.log(`SkillCheck backend running on port http://localhost:${config.port}`);
});
