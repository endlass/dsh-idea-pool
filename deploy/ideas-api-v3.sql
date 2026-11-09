-- ideas-api v0.3（PostgreSQL 线上库）：一句话摘要 + 关联会话
-- 执行：su postgres -c "psql -d ideas -f /opt/ideas-api/ideas-api-v3.sql"
ALTER TABLE ideas ADD COLUMN IF NOT EXISTS gist TEXT NOT NULL DEFAULT '';
ALTER TABLE ideas ADD COLUMN IF NOT EXISTS session_refs JSONB NOT NULL DEFAULT '[]'::jsonb;
