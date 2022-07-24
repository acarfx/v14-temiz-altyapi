module.exports = {
  apps: [
    {
      name: "Mainframe",
      namespace: "ACARFX",
      script: 'main.acar',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Bots/Main"
    }
  ]
};