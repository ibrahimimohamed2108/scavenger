
---

### **Full Project Structure**
Ensure your project directory (`~/Desktop/scavenger`) has the following structure:

```
scavenger/
├── server.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env
└── data/
    └── clue.txt
```

---

### **Rebuild and Push the Image**

#### 1. **Rebuild the Image**
```bash
docker build -t ibrahimimohamed2108/scavenger:latest .
```

#### 2. **Push to Docker Hub**
```bash
docker login  # Use your Docker Hub credentials
docker push ibrahimimohamed2108/scavenger:latest
```

---

### **Participant Instructions**

#### **Objective**  
Find the hidden keyword `messi10` by solving Docker and Node.js puzzles.  

---

#### **Steps for Participants**  
1. **Pull the Docker Image**:  
   ```bash
   docker pull ibrahimimohamed2108/scavenger:latest
   ```

2. **Run the Container**:  
   ```bash
   docker run -p 3000:3000 ibrahimimohamed2108/scavenger:latest
   ```

3. **Access the App**:  
   Open `http://localhost:3000` in your browser.  

4. **Solve the Puzzles**:  
   - **Puzzle 1**: Find the first part of the keyword (`messi`) in the Docker environment variables.  
     **Hint**: Use `docker inspect [container_id]` to find `SECRET_PART_1`.  
   - **Puzzle 2**: Find the second part (`10`) in the file `/app/data/clue.txt`.  
     **Hint**: Use `docker exec -it [container_id] sh` to explore the container.  
   - **Final Step**: Combine the parts to form `messi10` and visit `http://localhost:3000/clue`.  

---

### **Solution Workflow**  
1. **Find `SECRET_PART_1`**:  
   ```bash
   docker ps  # Get the container ID
   docker inspect [container_id] | grep "SECRET_PART_1"
   # Output: "SECRET_PART_1=messi"
   ```

2. **Find `clue.txt`**:  
   ```bash
   docker exec -it [container_id] sh
   cd /app/data
   cat clue.txt  # Output: "10"
   exit
   ```

3. **Validate the Keyword**:  
   Visit `http://localhost:3000/clue` to see:  
   ```
   🎉 Congratulations! The secret word is: <strong>messi10</strong>
   ```

---

### **Final Notes**
- Ensure the `package.json` file exists in your project directory.
- Rebuild and push the Docker image after fixing the issue.
- Share the Docker Hub and GitHub links with participants.

Let me know if you need further assistance! 🚀
