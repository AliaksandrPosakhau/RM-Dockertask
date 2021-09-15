# DESCRIPTION

To execute tests please follow those steps below:

1. Correct execution of this task requres installation of such applications as:
   - Docker desktop
   - Git

2. Run Docker desktop application

3. After installation of applications listed above clone this repository by launch Git bash terminal and execute command such as: <p>
   <b>git clone git@github.com:AliaksandrPosakhau/RM-Dockertask.git</b>

4. Run script in Git bash: <p>
   <b> npm run execute-task  </b>
  
  <p>
    This script: <p>
    - Build a Docker image basing on its description in Dockerfile;  <p>
    - Run a container based on recently built image; <p>
    - Connect to recently created container and launch test execution in this running container
       
       
       Results of test execution will be stored by this address on local machine(WIN10):
       \\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes\local-results\_data
  
