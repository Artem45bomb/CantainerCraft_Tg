export async function getToken(roomName: string, participantName: string) {
  const response = await fetch("http://localhost:8080/api/openvidu/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomName: roomName,
      participantName: participantName,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to get token: ${error.errorMessage}`);
  }

  const data = await response.json();
  return data.token;
}
