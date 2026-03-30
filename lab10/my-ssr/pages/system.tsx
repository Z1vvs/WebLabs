import { GetServerSideProps } from "next";

type Props = {
  time: string;
  userAgent: string;
  headers: Record<string, string>;
};

export default function SystemPage({ time, userAgent, headers }: Props) {
  return (
    <div className="container">
      <div className="card">
        <h1>System Status</h1>
        <p>
          <strong>Server Rendered:</strong> {new Date(time).toLocaleString()}
        </p>

        <div className="system-info">
          <div className="system-card">
            <h2>User Agent</h2>
            <p>{userAgent}</p>
          </div>
          <div className="system-card">
            <h2>Headers ({Object.keys(headers).length})</h2>
            <pre>{JSON.stringify(headers, null, 2)}</pre>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}></div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      time: new Date().toISOString(),
      userAgent: context.req.headers["user-agent"] || "unknown",
      headers: Object.fromEntries(
        Object.entries(context.req.headers).map(([k, v]) => [k, String(v)]),
      ),
    },
  };
};
