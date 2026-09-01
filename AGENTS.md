# Antigravity Agent - Dynamic Skill Discovery

You are integrated with SkillHub CLI (`npx skillhub`). 

Whenever you encounter a task that requires specialized domain knowledge, code reviews, specific framework setups, or API integrations:

1. **Search for Skills:**
   Execute terminal command:
   `npx -y skillhub search "<task_keyword>" --sort aiScore --limit 3`

2. **Install Skill:**
   Select the best matching skill and install it locally for the project:
   `npx -y skillhub install <owner/repo/skill-name> --project`

3. **Execute Skill Instructions:**
   Locate, open, and read the generated `SKILL.md` inside the installed skill directory. Follow its exact procedures and guidelines to complete the user's request.

4. **Clean Up:**
   Uninstall the skill after finishing if it is no longer required for the long-term context of the project:
   `npx -y skillhub uninstall <skill-name>`